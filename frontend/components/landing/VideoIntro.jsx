export default function VideoIntro() {
    return (
        <section className="py-16 bg-gray-100 dark:bg-muted px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-foreground">
                    ভিডিওতে দেখুন কিভাবে কাজ করে
                </h2>
                <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                        className="rounded-xl shadow-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="UddoktaHut Intro"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
