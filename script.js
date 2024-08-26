document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { title: "Indus Valley Civilization", year: "3300–1300 BCE", description: "One of the world's oldest civilizations, known for its advanced urban planning and impressive architecture, including cities like Harappa and Mohenjo-Daro." },
        { title: "Vedic Period", year: "1500–500 BCE", description: "The period in which the Vedas, the oldest scriptures of Hinduism, were composed. It marked the foundation of Indian philosophy and religious practices." },
        { title: "Maurya Empire", year: "322–185 BCE", description: "Founded by Chandragupta Maurya, the Maurya Empire became one of the largest empires in India, reaching its zenith under Ashoka, who promoted the spread of Buddhism." },
        { title: "Gupta Empire", year: "320–550 CE", description: "Known as the Golden Age of India, the Gupta period saw major advancements in science, mathematics, astronomy, religion, and philosophy." },
        { title: "Chola Empire", year: "300 BCE–1279 CE", description: "The Chola Empire was one of the longest-ruling dynasties in South Indian history, known for its naval strength, cultural patronage, and expansion into Southeast Asia." },
        { title: "Pandya Kingdom", year: "600 BCE–1345 CE", description: "The Pandya Kingdom, known for its contribution to Tamil literature and architecture, was one of the three ancient Tamil kingdoms." },
        { title: "Harsha's Empire", year: "606–647 CE", description: "Ruled by Emperor Harsha, this period saw the consolidation of Northern India and a flourishing of arts and culture." },
        { title: "Delhi Sultanate", year: "1206–1526 CE", description: "A series of Muslim dynasties ruled over large parts of the Indian subcontinent, laying the foundation for the rich Indo-Islamic culture." },
        { title: "Ahom Kingdom", year: "1228–1826 CE", description: "The Ahom Kingdom, located in present-day Assam, successfully resisted Mughal invasions and maintained its independence for nearly 600 years." },
        { title: "Vijayanagara Empire", year: "1336–1646 CE", description: "A powerful South Indian empire known for its patronage of arts and architecture, with the capital city Hampi being a major cultural hub." },
        { title: "Mughal Empire", year: "1526–1857 CE", description: "Founded by Babur, the Mughal Empire became one of the most powerful empires in Indian history, noted for its contributions to art, architecture, and culture, including the construction of the Taj Mahal." },
        { title: "Maratha Empire", year: "1674–1818 CE", description: "A powerful Hindu empire in Western India that challenged the Mughal dominance and laid the foundation for modern India's political structure." },
        { title: "Battle of Plassey", year: "1757 CE", description: "Marked the beginning of British dominance in India, following the defeat of the Nawab of Bengal by the British East India Company." },
        { title: "First War of Indian Independence", year: "1857 CE", description: "Also known as the Sepoy Mutiny, it was the first major uprising against British rule, setting the stage for future independence movements." },
        { title: "Formation of Indian National Congress", year: "1885 CE", description: "The founding of the Indian National Congress marked the beginning of organized political movements for India's independence." },
        { title: "Partition of Bengal", year: "1905 CE", description: "A controversial move by the British that led to widespread protests and the Swadeshi Movement, an early step towards independence." },
        { title: "Jallianwala Bagh Massacre", year: "1919 CE", description: "A tragic event in which British troops fired on unarmed Indian civilians, fueling widespread anger and intensifying the freedom struggle." },
        { title: "Non-Cooperation Movement", year: "1920–1922 CE", description: "Led by Mahatma Gandhi, this movement aimed at resisting British rule through nonviolent means." },
        { title: "Salt March", year: "1930 CE", description: "A pivotal moment in the Indian independence movement, where Mahatma Gandhi led a march to protest the British monopoly on salt production." },
        { title: "Quit India Movement", year: "1942 CE", description: "A mass protest demanding an end to British rule in India, with the slogan 'Do or Die'." },
        { title: "Independence and Partition of India", year: "1947 CE", description: "India gained independence from British rule on August 15, 1947, but the subcontinent was partitioned into India and Pakistan, leading to widespread violence and displacement." },
        { title: "Adoption of the Indian Constitution", year: "1950 CE", description: "On January 26, 1950, India became a republic with the adoption of its Constitution, which established it as a democratic nation." },
        { title: "Green Revolution", year: "1960s CE", description: "A major agricultural transformation that increased food production in India through the use of high-yielding variety seeds and modern farming techniques." },
        { title: "Emergency Period", year: "1975–1977 CE", description: "A 21-month period during which Prime Minister Indira Gandhi declared a state of emergency, suspending civil liberties and censoring the press." },
        { title: "Liberalization of Indian Economy", year: "1991 CE", description: "India adopted economic liberalization policies that opened up the economy to global markets, leading to significant economic growth." },
        { title: "Pokhran-II Nuclear Tests", year: "1998 CE", description: "India conducted a series of nuclear tests, making it a declared nuclear state." },
        { title: "2008 Mumbai Attacks", year: "2008 CE", description: "A series of terrorist attacks in Mumbai that shocked the nation and led to increased security measures." },
        { title: "Launch of Digital India", year: "2015 CE", description: "An initiative by the Indian government to ensure that government services are made available to citizens electronically by improving online infrastructure and increasing internet connectivity." },
        { title: "COVID-19 Pandemic", year: "2020 CE", description: "India, like the rest of the world, was deeply impacted by the COVID-19 pandemic, leading to significant public health challenges and economic disruptions." },
        { title: "Chandrayaan-3 Moon Landing", year: "2023 CE", description: "India's third lunar exploration mission successfully soft-landed on the Moon, making India the fourth country to achieve this feat." },
    ];

    const timeline = document.getElementById('timeline');

    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'timeline-event';
        eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.year}</p>`;
        eventDiv.addEventListener('click', () => showModal(event.title, event.description));
        timeline.appendChild(eventDiv);
    });

    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const eventTitle = document.getElementById('event-title');
    const eventDescription = document.getElementById('event-description');

    function showModal(title, description) {
        eventTitle.textContent = title;
        eventDescription.textContent = description;
        modal.style.display = 'block';
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
