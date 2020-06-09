/* eslint-disable */
import {HubConnectionBuilder} from '@aspnet/signalr';

export const client = new HubConnectionBuilder()
    .configureLogging(1)
    .withUrl('http://localhost:8080/heatmap/data')
    .build();

export default async function initConn() {
    client
        .start()
        .then(() => {
            console.log('connectionOpened');
        })
        .catch(err => {
            console.log('connectionError', err);
        });

    client.on('ReceiveUpdate', (res) => console.log(res));
    client.on('ReceiveBuildingUpdate', (res) => console.log(res));

}


export async function changeFloor() {
    await client.invoke('ChangeFloor', ['Heidelberglaan 15'])

}
