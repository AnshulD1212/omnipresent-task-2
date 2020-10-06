import axios from "axios";

const Add = async (startTime: string, endTime: string, system: string): Promise<string> => {
    const sTime: Date = new Date(startTime);
    const eTime: Date = new Date(endTime)
    let hours: number;
    if (eTime.getTime() > sTime.getTime()) {
        hours = Math.abs(eTime.getTime() - sTime.getTime()) / 36e5;
    } else {
        return 'endTime cannot be less than startTime';
    }
    switch (system) {
        case 'AlphaOne':
            console.log(`${system} recorded ${hours} hours`);
            break;
        case 'AlphaTwo':
            const url: string = `https://postman-echo.com/get?${system}=${hours}`;
            const response = await axios.get(url);
            console.log(JSON.stringify(response.data, null, 2));
            break;
        default:
            console.log(`${system} recorded ${hours} hours`);
            break;
    }
    return `Entry added to system ${system}`;
}
export default Add;
