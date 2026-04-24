

const loading = () => {
    return (
        <div className="flex justify-center items-center">
            <h2>Loading book details...</h2>
            <span className="loading loading-spinner text-info"></span>
        </div>
    );
};

export default loading;