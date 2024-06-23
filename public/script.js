

const timelineData = {
    title: {
        text: {
            headline: "My Timeline",
            text: "Heyya"
            
        }
    },
    events: [
        {
            start_date: { year: 2023, month: 1, day: 27 },
            text: { headline: "Event 1", Description: "My first event" },
            media: {
                url: "/images/event1.jpeg",
                
            }
        },
        {
            start_date: { year: 2023, month: 5, day: 4 },
            text: { headline: "Event 2", Description: "My second event" },
            media: {
                url: "/images/event2.jpg",
                
            }
           
        },
        {
            start_date: { year: 2023, month: 8, day: 10 },
            text: { headline: "Event 3", Description: "Travel" },
            media: {
                url: "/images/shoot.jpg",
                
            }
            
        },
        {
            start_date: { year: 2023, month: 12, day: 20 },
            text: { headline: "Event 4", Description: "Study"  },
            media: {
                url: "/images/talk.jpg",
                
            }
            
        },
        {
            start_date: { year: 2024, month: 2, day: 3 },
            text: { headline: "Event 5", Description: "Work"  },
            media: {
                url: "/images/balls.jpg",
                
            }
            
        }
    ]
};

window.timeline = new TL.Timeline('timeline-embed', timelineData);
