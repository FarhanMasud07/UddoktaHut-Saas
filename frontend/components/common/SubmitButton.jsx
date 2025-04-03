import Image from "next/image";
import { Button } from "../ui/button";



const SubmitButton = ({ isLoading, className, children, loadingMessage, onClick }) => {
    return (
        <Button
            type="submit"
            disabled={isLoading}
            className={className ?? "bg-green-400 w-full"}
            onClick={onClick}
        >
            {isLoading ? (
                <div className="flex items-center gap-4">
                    <Image
                        src="/assets/icons/loader.svg"
                        alt="loader"
                        width={24}
                        height={24}
                        className="animate-spin"
                    />
                    {loadingMessage}
                </div>
            ) : (
                children
            )}
        </Button>
    );
};

export default SubmitButton;
