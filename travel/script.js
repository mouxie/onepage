// Basic Framer Motion Integration Example (needs inclusion in HTML first)
// This is highly simplified. Real implementation needs careful targeting and effect design.

// Assuming you wrap each <article class="day-schedule"> or blocks inside
// with <motion.div> tags as shown in the HTML structure example.

// No specific JS needed for the basic Framer Motion attributes in HTML (initial, whileInView, transition)
// They work declaratively.

// Example: If you wanted to add more complex scroll-linked animations programmatically
// (e.g., parallax effect on the huge title)

// import { motion, useScroll, useTransform } from "framer-motion"; // If using modules

// function HeaderParallax() {
//   const { scrollYProgress } = useScroll();
//   // Example: Move title up faster than scroll
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
//
//   return (
//      // In your Header component/section
//      <motion.h1 style={{ y }} className="huge-title highlight">
//         京 <span className="small-accent">BEIJING</span>
//      </motion.h1>
//   );
// }


// Optional: Chart.js Example Integration
const ctx = document.getElementById('timeAllocationChart');
if (ctx) {
    // Sample Data (replace with actual calculated data per day)
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: '游玩 Play',
                data: [6, 5.5, 7, 5, 6, 4.5, 2], // Example hours
                backgroundColor: 'rgba(255, 165, 0, 0.7)', // Orange with alpha
                borderColor: '#FFA500',
                borderWidth: 1
            },
            {
                label: '交通 Travel',
                data: [1, 1.5, 1.2, 1.3, 1.8, 1.5, 1.5], // Example hours
                backgroundColor: 'rgba(255, 165, 0, 0.4)', // Lighter Orange
                borderColor: '#FFA500',
                borderWidth: 1
            },
             {
                label: '用餐 Meals',
                data: [4.2, 4.2, 4.2, 4.2, 4.2, 4.2, 1.9], // Fixed based on request (Breakfast 40m + Lunch 90m + Dinner 110m = 240m = 4h / Day 7 only B+L)
                backgroundColor: 'rgba(255, 165, 0, 0.2)', // Very light Orange
                borderColor: '#FFA500',
                borderWidth: 1
            }
        ]
    };

    // Chart Configuration
    const config = {
        type: 'bar', // or 'line', 'pie' etc.
        data: data,
        options: {
            plugins: {
                title: { display: true, text: '每日时间分配 (估算)', color: '#FFF' },
                legend: { labels: { color: '#FFF' } } // Legend text color
            },
            scales: {
                y: {
                    beginAtZero: true,
                    stacked: true, // Stack bars to show total time
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }, // Light grid lines
                    ticks: { color: '#FFF' } // Y-axis labels color
                },
                x: {
                    stacked: true,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#FFF' } // X-axis labels color
                }
            },
            // Maintain aspect ratio for responsiveness
            maintainAspectRatio: false
        }
    };

    // Create the chart
    new Chart(ctx, config);
}

console.log("Beijing Itinerary Page Script Loaded.");
