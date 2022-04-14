import type { Page } from "../types/pages";

const ProgramCard = ({ program }: { program: Page }) => {
    return (
        <div
            className="w-full bg-hk-grey hover:bg-hk-grey-hover rounded-lg"
            aria-label={program.name}
        >
            <div className="w-full p-6 space-y-0.5">
                <span className="text-gray-900 dark:text-white text-md font-medium truncate">
                    {program.name}
                </span>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {program.description}
                </p>
            </div>
        </div>
    );
};

export default ProgramCard;
