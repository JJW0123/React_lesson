import React from "react";
import Notification from "./Notification"

const reservedNotifications = [
    {
        message: "메세지 01",
    },
    {
        message: "메세지 02",
    },
    {
        message: "메세지 03",
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
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notification) => {
                    return <Notification message={notification.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;