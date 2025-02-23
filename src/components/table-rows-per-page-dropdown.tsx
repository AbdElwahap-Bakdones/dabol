import { cn } from "@/lib/utils";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useTranslation } from "react-i18next";
import { Links } from "@/constants/links";
import { Check, ChevronsUpDown } from "lucide-react";

const TableRowsPerPageDropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation("translation");
  const [open, setOpen] = useState(false);
  console.log(searchParams.get("count"));
  return (
    <div className="flex items-center space-x-2 w-fit">
      <p className="text-sm text-primary font-medium text-nowrap">
        {t("pagination.number-row")}
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            // aria-expanded={open}
            size="sm"
            className="justify-between py-0 text-primary border-secondary"
          >
            {searchParams.has("count") ? searchParams.get("count") : "15"}
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[100px] p-0">
          <Command>
            <CommandList>
              <CommandGroup>
                {Links.map((number) => (
                  // <div>{number}</div>
                  <CommandItem
                    key={number.id}
                    value={number.path}
                    className="w-full justify-between text-primary"
                    onSelect={(currentValue) => {
                      searchParams.set("count", currentValue);
                      if (searchParams.has("page"))
                        searchParams.set("page", "1");
                      setSearchParams(searchParams);
                      setOpen(false);
                    }}
                  >
                    {number.lable}
                    <Check
                      className={cn(
                        "h-4 w-4",
                        searchParams.get("count") === number.lable
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TableRowsPerPageDropdown;
