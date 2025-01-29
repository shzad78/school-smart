import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Default styles, can be customized
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";

type PhoneInputProps = {
  register: any;
  errors: any;
  label: string;
  name: string;
  toolTipText?: string;
  placeholder?: string;
  defaultCountry?: string;
  control: any; // React Hook Form control
  setValue: (name: string, value: any) => void;
  icon?: any; // Icon component
};

export default function PhoneNumberInput({
  register,
  errors,
  label,
  name,
  toolTipText,
  placeholder,
  defaultCountry = "us",
  setValue,
  icon,
}: PhoneInputProps) {
  const Icon = icon;

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2 relative">
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Icon className="text-slate-300 w-4 h-4" />
          </div>
        )}
        <PhoneInput
          country={defaultCountry}
          value=""
          onChange={(value) => setValue(name, value)}
          inputProps={{
            name: name,
            className: cn(
              "block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-sm pl-10", // Added padding for icon space
              errors[name] && "focus:ring-red-500"
            ),
            placeholder: placeholder || label,
          }}
          containerClass="w-full"
          inputClass="w-full pl-10" // Ensures text doesn't overlap with the icon
        />
      </div>
      {errors[name] && <span className="text-xs text-red-600">{label} is required</span>}
    </div>
  );
}
