import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Input } from "./ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Button } from "./ui/button";
import country from "country-list-js";
import { useTranslation } from "react-i18next";
const countriesCode = (
  Object.values(country.all) as { name: string; dialing_code: string }[]
)
  .filter((country) => country.dialing_code)
  .filter((country) => country.dialing_code.trim().length > 0)
  .filter((country) => !country.dialing_code.trim().includes("and"))
  .filter((country) => country.dialing_code !== "972")
  .map((country) => ({
    label: `${country.name} (${country.dialing_code})`,
    value: country.dialing_code,
  }))
  .map((country, index) => ({ ...country, id: index + 1 }));

type PropsType = {
  setPhone: Dispatch<SetStateAction<{ code: string; phone: string }>>;
  phone: { code: string; phone: string };
};

const PhoneNumberInput: FC<PropsType> = ({ setPhone, phone }) => {
  const [code, setCode] = useState("");
  const { t } = useTranslation();
  const [label, setLabel] = useState(
    phone.code
      ? countriesCode.find((p) => p.value === phone.code)?.label
      : "United Arab Emirates (971)"
  );
  const [openPopover, setOpenPopover] = useState(false);
  const [inputField, setInputField] = useState(phone.phone);

  useEffect(() => {
    if (label) {
      const selectedCode = countriesCode.find(
        (country) => country.label.toLowerCase() === label.toLowerCase()
      )!.value;

      setCode(selectedCode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label]);

  useEffect(() => {
    setPhone({
      code,
      phone: inputField,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputField, code]);
  return (
    <div className="flex justify-center overflow-hidden w-full items-center border rounded-md border-primary ">
      <Popover open={openPopover} onOpenChange={setOpenPopover}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={openPopover}
            tabIndex={-1}
            className="justify-between border-e rounded-none "
          >
            {!code.includes("+") ? `+${code}` : code}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" side="top">
          <Command>
            <CommandInput placeholder={t("global.country-placeholder")} />
            <CommandEmpty>{t("global.country-empty")}</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {countriesCode.map((countryCode) => (
                  <CommandItem
                    key={countryCode.label}
                    value={countryCode.label}
                    className="text-xs text-primary cursor-pointer"
                    onSelect={(currentValue) => {
                      setLabel(
                        currentValue === label
                          ? "United Arab Emirates (971)"
                          : currentValue
                      );
                      setOpenPopover(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        label === countryCode.label
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {countryCode.label}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <Input
        value={inputField}
        onChange={(e) => setInputField(e.target.value)}
        className="border-none focus-visible:ring-0"
      />
    </div>
  );
};

export default PhoneNumberInput;
