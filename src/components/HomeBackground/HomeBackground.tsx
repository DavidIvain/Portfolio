import "./home-background.scss";

export const HomeBackground = () => {
    return <div id="home-background" aria-hidden>
        <div id="cloud-1"><div></div></div>
        <div id="cloud-2"><div></div></div>
        <div id="cloud-3"><div></div></div>
        <div id="cloud-4"><div></div></div>
        <div id="moon"><div></div></div>
        <img src="/assets/wave.svg" className="wave" alt="wave" aria-hidden />
        <img src="/assets/boat.svg" alt="boat" id="boat" aria-hidden />
        <img src="/assets/wave-2.svg" className="wave" alt="wave" aria-hidden />
        <img src="/assets/wave-3.svg" className="wave" alt="wave" aria-hidden />
    </div>
}