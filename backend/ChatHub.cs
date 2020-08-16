using System;
using Microsoft.AspNetCore.SignalR;

namespace ReactAspNetCoreSignalR
{
    public class ChatHub : Hub
    {
        const int MAX_USERNAME_LENGTH = 20;
        const int MAX_MESSAGE_LENGTH = 1000;

        public void SendToAll(Message msg)
        {
            if (msg.message.Length > 0)
            {
                var username = TruncateString(msg.username, MAX_USERNAME_LENGTH);
                var message = TruncateString(msg.message, MAX_MESSAGE_LENGTH);
                var msgPacket = new MessagePacket(username, message);
                Console.WriteLine($"{username} sent a message");
                Clients.All.SendAsync("sendToAll", msgPacket);
            }
        }

        public void NewUserConnected(string username)
        {
            if (username.Length > 0)
            {
                username = TruncateString(username, MAX_USERNAME_LENGTH);
                Console.WriteLine($"{username} logged in");
                var loggedInPacket = new LoggedInPacket(username);
                Clients.All.SendAsync("newUserConnected", loggedInPacket);
            }
        }

        public static string TruncateString(string str, int maxLength)
        {
            if (string.IsNullOrEmpty(str))
                return str;
            return str.Substring(0, Math.Min(str.Length, maxLength));
        }


    }
}