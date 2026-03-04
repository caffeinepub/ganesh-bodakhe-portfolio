import Array "mo:core/Array";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactMessage {
    public func compare(contact1 : ContactMessage, contact2 : ContactMessage) : Order.Order {
      Int.compare(contact1.timestamp, contact2.timestamp);
    };
  };

  let messages = Map.empty<Time.Time, ContactMessage>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async () {
    let timestamp = Time.now();
    if (messages.containsKey(timestamp)) {
      Runtime.trap("Timestamp collision. Please try again.");
    };
    let newMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp;
    };
    messages.add(timestamp, newMessage);
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    messages.values().toArray().sort();
  };
};
