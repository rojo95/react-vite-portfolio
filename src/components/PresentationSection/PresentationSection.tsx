import { useEffect, useState } from "react";
import imagen from "../../assets/johan.webp";
import "./PresentationSection.css";

export default function PresentationSection() {
    const [animationRunning, setAnimationRunning] = useState<boolean>(false);
    const [experience, setExperience] = useState<number>(0);
    useEffect(() => {
        setExperience(7);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationRunning(true);

            setTimeout(() => {
                setAnimationRunning(false);
            }, 1800);
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container">
            <div>
                <h1 className="writer title">Johan A. Román</h1>
                <p className="text">
                    ¡Hola! Soy un Ingeniero en Informática con más de{" "}
                    {experience} años de experiencia en el área y me especializo
                    en el desarrollo de sistemas informáticos.
                    <br /> Me considero una persona responsable, organizada,
                    proactiva, comunicativa, creativa e investigativa, siempre
                    dispuesta a aprender nuevos conocimientos y a asumir retos
                    de cualquier tipo. Me apasiona la tecnología y la
                    innovación, y siempre busco estar al día con las últimas
                    tendencias en el campo de la informática. Mi experiencia
                    laboral ha sido en distintos proyectos que me han permitido
                    desarrollar habilidades en diversas áreas del desarrollo de
                    software, desde el análisis y diseño hasta la implementación
                    y mantenimiento. Estoy seguro de que mi perfil profesional
                    puede ser un gran aporte para cualquier proyecto en el que
                    se requiera un enfoque tecnológico y creativo.
                </p>
            </div>
            <div className="image-container">
                <div className="glitch">
                    <img src={imagen} alt="Johan" />
                    <div className="glitch__layers">
                        <div
                            className={animationRunning ? "glitch__layer" : ""}
                        ></div>
                        <div
                            className={animationRunning ? "glitch__layer" : ""}
                        ></div>
                        <div
                            className={animationRunning ? "glitch__layer" : ""}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
