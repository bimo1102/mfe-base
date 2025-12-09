const ProgressBarLoader = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-20 h-[3px] overflow-hidden bg-transparent">
            <div className="h-full w-full bg-[var(--tw-primary)] opacity-50 animate-progress-bar"></div>
        </div>
    );
};

export { ProgressBarLoader };
