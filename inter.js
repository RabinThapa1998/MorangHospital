const sectionOne = document.querySelector('.section1');
const header = document.querySelector('header');
const slide = document.querySelectorAll('.slide');
const images = document.querySelectorAll('[data-src]');

const options = {
    threshold:0

};
function loader(imgele){
    const src = imgele.getAttribute('data-src');
    console.log(imgele)
    if(!src){
        return
    }
    imgele.src= src
}
const observer = new IntersectionObserver(
    function(entries, observer) {
        // console.log(entries)
        entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('appear');
            // observer.unobserve(entry.target);
            header.classList.add('appear');
            
        }
        else{
            header.classList.remove('appear');
            return          
        }
        });
    }, options);

 slide.forEach(slide=>{
     observer.observe(slide);
 })

 const imgobserver = new IntersectionObserver(
    function(entries, imgobserver){
        entries.forEach(entry=>{
            loader(entry.target)
            imgobserver.unobserve(entry.target)
        })
    } 
    ,options)

 images.forEach(img=>{
    imgobserver.observe(img);
 })
 
