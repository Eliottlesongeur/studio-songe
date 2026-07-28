"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent, MouseEvent, SyntheticEvent } from "react";
import { Heading } from "@/components/Heading/Heading";
import { Text } from "@/components/Text/Text";
import { Field } from "@/components/Field/Field";
import { Input } from "@/components/Input/Input";
import { Textarea } from "@/components/Textarea/Textarea";
import { Button } from "@/components/Button/Button";
import styles from "./ContactModal.module.css";

type Status = "idle" | "submitting" | "success" | "error";

/** Clé publique Web3Forms (sûre à exposer côté client — cf. .env.local). */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const TITLE_ID = "contact-modal-title";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ContactModal — pop-up de contact global, monté une seule fois via le
 * `ContactModalProvider`. S'appuie sur le `<dialog>` natif (backdrop, focus
 * trap et Échap gratuits) et envoie le formulaire à Web3Forms en AJAX :
 * la page reste en place, on affiche un état succès/erreur sans navigation.
 */
export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Synchronise l'état React avec le <dialog> natif (showModal/close).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    else if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // Verrouille le scroll de la page pendant l'ouverture.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Remet le formulaire à zéro un instant après la fermeture.
  useEffect(() => {
    if (isOpen) return;
    const timer = setTimeout(() => {
      setStatus("idle");
      setErrorMsg("");
    }, 250);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Échap (événement natif « cancel ») → on remonte la fermeture au parent.
  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();
    onClose();
  };

  // Clic sur le fond (hors panneau) → fermeture.
  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose();
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(result.message ?? "Une erreur est survenue. Merci de réessayer.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Impossible d'envoyer le message. Vérifiez votre connexion et réessayez.");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={TITLE_ID}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div className={styles.panel}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fermer">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          <div className={styles.state}>
            <Heading as="h2" variant="sous-titre" id={TITLE_ID} className={styles.title}>
              Message envoyé
            </Heading>
            <Text tone="muted">
              Merci, votre message est bien parti. Studio Songe vous répond au plus vite.
            </Text>
            <div className={styles.actions}>
              <Button type="button" variant="secondary" onClick={onClose}>
                Fermer
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.head}>
              <Heading as="h2" variant="sous-titre" id={TITLE_ID} className={styles.title}>
                Parlons de votre projet
              </Heading>
              <Text tone="muted">
                Décrivez votre projet en quelques mots, nous revenons vers vous rapidement.
              </Text>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <input type="hidden" name="subject" value="Nouveau message — studiosonge.fr" />
              <input type="hidden" name="from_name" value="Site Studio Songe" />
              {/* Honeypot anti-spam (masqué) : rempli = envoi ignoré par Web3Forms. */}
              <input
                type="checkbox"
                name="botcheck"
                className={styles.honeypot}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <Field label="Nom" required>
                <Input name="name" autoComplete="name" required />
              </Field>
              <Field label="Email" required>
                <Input type="email" name="email" autoComplete="email" required />
              </Field>
              <Field label="Téléphone">
                <Input type="tel" name="phone" autoComplete="tel" />
              </Field>
              <Field label="Votre projet" required>
                <Textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Type de projet, surface, lieu, échéance…"
                />
              </Field>

              {status === "error" && (
                <Text tone="muted" role="alert" className={styles.error}>
                  {errorMsg}
                </Text>
              )}

              <div className={styles.actions}>
                <Button type="submit" variant="primary" block disabled={status === "submitting"}>
                  {status === "submitting" ? "Envoi…" : "Envoyer mon message"}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
