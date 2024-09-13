export default function Location() {
  return (
    <div>
      <video
        className="w-full h-auto p-5 rounded-[2.5rem]"
        src="/video/slider.mp4"
        controls
        poster="/img/dental2.png"></video>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96261.059544503!2d28.856770992279056!3d41.065536419891714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac64c07925733%3A0x96ea14ba8be2cdb6!2sEstetik%20International!5e0!3m2!1sen!2str!4v1718963674578!5m2!1sen!2str"
        loading="lazy"
        className="w-full h-auto px-5 rounded-[2rem]"></iframe>
      <h3 className="text-black">Estetik International </h3>
    </div>
  );
}
