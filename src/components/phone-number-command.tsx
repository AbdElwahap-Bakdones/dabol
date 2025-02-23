import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import country from "country-list-js";
import { Check } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
type PropsType = {
  setValue: (value: string) => void;
  value: string;
};

type Country = {
  capital: string;
  continent: string;
  currency: string;
  currency_decimal: string;
  currency_symbol: string;
  dialing_code: string;
  iso2: string;
  iso3: string;
  name: string;
  provinces: undefined;
  region: string;
};

const PhoneNumberCommand: FC<PropsType> = ({ setValue, value }) => {
  const AllCountries = (Object.values(country.all) as Country[]).filter(
    (country) => country.dialing_code
  );

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(
    AllCountries.find((country) => country.dialing_code === value)?.name ||
      "United Arab Emirates"
  );
  useEffect(() => {
    setValue(
      AllCountries.find((country) => country.name === name)?.dialing_code ||
        value
    );
    console.log(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
  const { t } = useTranslation();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-fit px-3 gap-2 justify-center hover:bg-foreground  rounded-md text-base !h-12",
            name === "" &&
              "text-muted-foreground/50 hover:text-muted-foreground/50"
          )}
        >
          {name ? (
            <>
              <Icon
                icon={`flag:${AllCountries.find(
                  (country) => country.name === name
                )?.iso2.toLocaleLowerCase()}-4x3`}
              />
              <span>{`${value ? `+${value}` : ""}`}</span>
            </>
          ) : (
            ""
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="p-0 w-[300px]">
        <Command>
          <CommandInput
            autoFocus={false}
            placeholder={t("Search country...")}
            // onChange={(e) => handleInputChange(e.target.value)}
          />
          <CommandEmpty>No country Found.</CommandEmpty>
          <CommandList className="max-h-[250px]">
            <CommandGroup>
              {AllCountries.map((nationality, index) => {
                return (
                  <CommandItem
                    key={index}
                    value={nationality.name}
                    onSelect={(currentValue) => {
                      setName(currentValue === name ? "" : currentValue);
                      setOpen(false);
                    }}
                    className="opacity-100"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        name === nationality.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <p className="flex w-full justify-between text-primary items-center gap-1">
                      {nationality.name}
                      <Icon
                        icon={`flag:${nationality.iso2.toLocaleLowerCase()}-4x3`}
                      />
                    </p>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default PhoneNumberCommand;
