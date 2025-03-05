import { Button, Card } from "@mui/material";

type Retreat = {
    imageSrc: string;
    name: string;
    description: string;
    createDate: Date;
}

const retreats: Retreat[] = [
    {
        imageSrc: 'https://example.com/image1.jpg',
        name: 'Mountain Retreat',
        description: 'A peaceful retreat in the mountains.',
        createDate: new Date('2023-01-01')
    },
    {
        imageSrc: 'https://example.com/image2.jpg',
        name: 'Beach Retreat',
        description: 'A relaxing retreat by the beach.',
        createDate: new Date('2023-02-01')
    },
    {
        imageSrc: 'https://example.com/image3.jpg',
        name: 'Forest Retreat',
        description: 'A serene retreat in the forest.',
        createDate: new Date('2023-03-01')
    },
    {
        imageSrc: 'https://example.com/image4.jpg',
        name: 'Desert Retreat',
        description: 'An adventurous retreat in the desert.',
        createDate: new Date('2023-04-01')
    },
    {
        imageSrc: 'https://example.com/image5.jpg',
        name: 'Lake Retreat',
        description: 'A calm retreat by the lake.',
        createDate: new Date('2023-05-01')
    },
    {
        imageSrc: 'https://example.com/image6.jpg',
        name: 'City Retreat',
        description: 'A vibrant retreat in the city.',
        createDate: new Date('2023-06-01')
    },
    {
        imageSrc: 'https://example.com/image7.jpg',
        name: 'Countryside Retreat',
        description: 'A charming retreat in the countryside.',
        createDate: new Date('2023-07-01')
    }
];

const RetreatManagementPage = () => {
    return (
        <Card style={{display: 'flex', flexDirection: 'column'}}>
            <Button>הוספה</Button>
            <div style={{backgroundColor: 'gray', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', height: '100%'}}>
                {...retreats.map((retreat) => (
                    <div>
                        <img src={retreat.imageSrc} alt={retreat.name} />
                        <h2>{retreat.name}</h2>
                        <p>{retreat.description}</p>
                        <p>{retreat.createDate.toDateString()}</p>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export {RetreatManagementPage};