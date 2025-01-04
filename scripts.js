// const track = document.querySelector('.carousel-track');
//     const cards = Array.from(track.children);

//     const toggle = document.querySelector('.nav-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     function autoSlide() {
//       const cardWidth = cards[0].getBoundingClientRect().width + 30; // Include margin
//       const lastCard = cards.pop(); // Remove the last card
//       cards.unshift(lastCard); // Add it to the beginning

//       track.style.transition = 'none'; // Disable transition for the instant reposition
//       track.insertBefore(lastCard, track.firstChild); // Move the last card to the beginning
//       track.style.transform = `translateX(-${cardWidth}px)`; // Start with offset

//       setTimeout(() => {
//         track.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
//         track.style.transform = 'translateX(0)'; // Slide to the new position
//       }, 50);
//     }

//     setInterval(autoSlide, 3000); // Slide every 3 seconds

 
    
//     toggle.addEventListener('click', () => {
//       navLinks.classList.toggle('active');
//     });
    