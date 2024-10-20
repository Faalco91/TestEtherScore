'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSwitch = (isSelected) => {
    if (isSelected) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Switch
      defaultSelected={theme === "light"}
      size="lg"
      color="secondary"
      onChange={(e) => handleSwitch(e.target.checked)}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <SunIcon className={className} /> : <MoonIcon className={className} />
      }
    />
  );
};

export default Switcher;
