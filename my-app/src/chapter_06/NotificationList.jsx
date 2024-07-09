import React from "react";
import Notification from "./Notification"

const reservedNotifications = [
    {
        id: 1,
        message: "메세지 01",
    },
    {
        id: 2,
        message: "메세지 02",
    },
    {
        id: 3,
        message: "메세지 03",
    },
    {
        id: 4,
        message: "메세지 04",
    },
    {
        id: 5,
        message: "메세지 05",
    },
    {
        id: 6,
        message: "메세지 06",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props){
        super(props);

        this.state={
            notifications:[],
        };
    }

    componentDidMount(){
        const{notifications} = this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else{
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification 
                    key={notification.id}
                    id={notification.id}
                    message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;