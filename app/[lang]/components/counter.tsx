"use client";

import { useState } from "react";
import { type getDictionary } from "../../../get-dictionary";
import { useTranslation } from "../../components/TranslationsProvider";

export default function Counter({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const [count, setCount] = useState(0);

  const t = useTranslation();

  console.log(t("checkCache"));

  return (
    <p>
      <span>
        {t("checkCache")}: {count}
      </span>
      This component is rendered on client:
      <button onClick={() => setCount((n) => n - 1)}>
        {dictionary.decrement}
      </button>
      {count}
      <button onClick={() => setCount((n) => n + 1)}>
        {dictionary.increment}
      </button>
    </p>
  );
}
