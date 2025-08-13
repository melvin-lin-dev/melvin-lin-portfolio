"use client";

import Alert, { type AlertType } from "@/common/components/Alert";
import FloatingField from "@/common/components/FloatingLabel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EMAIL_CONFIG } from "@/config/email";
import emailjs from "emailjs-com";
import { Boxes } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactElement } from "react";

export default function EmailFormContainer(): ReactElement {
    const [showAlert, setShowAlert] = useState<AlertType | null>(null);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current == null) return;

        emailjs.sendForm(EMAIL_CONFIG.serviceId!, EMAIL_CONFIG.templateId!, form.current, EMAIL_CONFIG.publicKey).then(
            () => {
                setShowAlert("success");
                form.current?.reset();
            },
            (error) => {
                setShowAlert("failed");
                console.error("EmailJS failed: ", error.text);
            }
        );
    };

    const handleClose = () => {
        setShowAlert(null);
    };

    useEffect(() => {
        const timer = setTimeout(() => handleClose(), 3000);
        return () => clearTimeout(timer);
    }, [showAlert]);

    return (
        <div className="py-8 px-4 bg-white rounded-xl shadow-[0_4px_10px_#ccc] lg:shadow-[0_4px_15px_1px_#ccc]">
            <div className="max-w-md mx-auto">
                <h3 className="mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-center">Get in Touch</h3>

                <Alert type="success" message="Thanks for your message! I'll get back to you shortly." hidden={showAlert} onClose={handleClose} />
                <Alert type="failed" message="Hmm, something went wrong. Don’t worry — you can try again!" hidden={showAlert} onClose={handleClose} />

                <form className="space-y-5" ref={form} onSubmit={sendEmail}>
                    <div className="relative z-0 w-full group">
                        <span className="absolute top-1/2 left-0 -translate-y-1/2 text-gray-400 px-2 pointer-events-none">
                            <Boxes className="w-5 h-5" />
                        </span>
                        <Select name="subject" defaultValue="General">
                            <SelectTrigger className="w-full py-3 pl-9 text-sm text-gray-900 text-center bg-transparent rounded-none border-0 border-b-2 border-gray-300">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="General">General Message</SelectItem>
                                <SelectItem value="Job Inquiry">Job Inquiry</SelectItem>
                                <SelectItem value="Project Collaboration">Project Collaboration</SelectItem>
                                <SelectItem value="Feedback">Feedback</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <FloatingField label="Name" name="name" iconName="user" />
                    <FloatingField type="email" label="Email" name="email" iconName="mail" />
                    <FloatingField type="textarea" label="Message" name="message" iconName="messagecircle" />

                    <input type="submit" value="Send" className="btn btn-secondary w-full" />
                </form>
            </div>
        </div>
    );
}
