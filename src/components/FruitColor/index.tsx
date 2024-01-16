import Image from "next/image";


export enum Fruit {
    Apple = 'APPLE',
    Banana = 'BANANA',
    Orange = 'ORANGE'
}

type FruitColorProps = {
    fruit: Fruit
}

const FruitColor = ({ fruit }: FruitColorProps) => {
    let color: string;

    switch (fruit) {
        case Fruit.Apple:
            color = 'red';
            break;
        case Fruit.Banana:
            color = 'yellow';
            break;
        case Fruit.Orange:
            color = 'orange';
            break;
        default:
            color = 'unknown';
    }

    return (
        <div style={{ color: `${color}` }}>
            The  color of the {fruit} is {color}
        </div>
    )
}

export default FruitColor;