
"use client";

import { Button } from "@/components/ui/button";
import { BusinessNeedsForm } from "./business-needs-form";
import { CompanyInfoForm } from "./company-info-form";
import { ContactInfoForm } from "./contact-info-form";

interface ActionPanelProps {
    currentMessage: any;
    onOptionClick: (option: { text: string; value: string }) => void;
    isLoading: boolean;
    onFormPartSubmit: (partData: any, partName: string, userMessageText: string) => void;
}

export function ActionPanel({ currentMessage, onOptionClick, isLoading, onFormPartSubmit }: ActionPanelProps) {
    if (isLoading || !currentMessage || currentMessage.from === 'user') {
        return null;
    }

    const renderContent = () => {
        switch (currentMessage.type) {
            case 'buttons':
                return (
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentMessage.options.map((opt: any) => (
                            <Button key={opt.value} variant="outline" size="sm" className="w-full justify-start text-xs h-auto py-2" onClick={() => onOptionClick(opt)}>
                                <div className="flex items-start text-left w-full">
                                    {opt.icon && <div className="flex-shrink-0 mt-0.5">{opt.icon}</div>}
                                    <div className="ml-2 flex-1 min-w-0 break-words">{opt.text}</div>
                                </div>
                            </Button>
                        ))}
                    </div>
                );
            case 'form_part':
                if (currentMessage.partName === 'businessNeeds') {
                    return <BusinessNeedsForm onFormPartSubmit={onFormPartSubmit} partName={currentMessage.partName} />;
                }
                if (currentMessage.partName === 'companyInfo') {
                    return <CompanyInfoForm onFormPartSubmit={onFormPartSubmit} partName={currentMessage.partName} />;
                }
                 if (currentMessage.partName === 'contactInfo') {
                    return <ContactInfoForm onFormPartSubmit={onFormPartSubmit} partName={currentMessage.partName} />;
                }
                return null;
            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            {renderContent()}
        </div>
    )
};
