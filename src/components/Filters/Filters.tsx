"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import styles from "./Filters.module.css";

export interface FilterItem {
  label: ReactNode;
  value: string;
}

export interface FiltersProps {
  /** Options du filtre (ex. Tous / Résidences / Commerces / Bureaux). */
  items: FilterItem[];
  /** Valeur active (mode contrôlé). */
  value?: string;
  /** Valeur active initiale (mode non contrôlé). */
  defaultValue?: string;
  /** Notifié à chaque changement de filtre. */
  onValueChange?: (value: string) => void;
  /** Libellé du groupe pour les lecteurs d'écran. */
  ariaLabel?: string;
  className?: string;
}

/**
 * Filters — barre de filtres en pills (charte : pill terracotta actif).
 * Contrôlé (`value`) ou non contrôlé (`defaultValue`). Sémantique de
 * groupe de bascules : `role="group"` + `aria-pressed` par option.
 */
export function Filters({
  items,
  value,
  defaultValue,
  onValueChange,
  ariaLabel = "Filtrer",
  className,
}: FiltersProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const active = isControlled ? value : internal;

  const select = (next: string) => {
    if (!isControlled) setInternal(next);
    onValueChange?.(next);
  };

  const classes = [styles.filters, className].filter(Boolean).join(" ");

  return (
    <div className={classes} role="group" aria-label={ariaLabel}>
      {items.map((item) => {
        const isActive = item.value === active;
        return (
          <button
            key={item.value}
            type="button"
            className={[styles.pill, isActive && styles.active].filter(Boolean).join(" ")}
            aria-pressed={isActive}
            onClick={() => select(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
