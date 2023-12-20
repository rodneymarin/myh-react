const Score = ({ muertos, heridos, isVisible }) => {
    return (
        <div className={`score-container ${isVisible ? "" : "non-visible"}`}>
            <div className={`muertos ${muertos === 0 ? "" : "muertos-noncero"}`}>
                {muertos} {muertos === 1 ? "Muerto" : "Muertos"}
            </div>
            <div className={`heridos ${heridos === 0 ? "" : "heridos-noncero"}`}>
                {heridos} {heridos === 1 ? "Herido" : "Heridos"}
            </div>
        </div>
    );
};

export default Score;
