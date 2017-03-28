let Particles =
{
	maxParticles: 200,
	particleCount: 0,
	particleCreationInterval: 25,
	$container: undefined,

	init()
	{
		this.particleCount = 0;
		this.createRain();
	},
	createRain()
	{
		this.createInstance();
		this.particleCount++;
		if(this.particleCount < this.maxParticles)
		{
			setTimeout(() => this.createRain(), this.particleCreationInterval);
		}
	
	},
	createInstance()
	{
		const $particle = $('<img class="particle" src="img/hajs.gif"/>')
		.appendTo(this.$container)
		.css("left",((Math.random()*140-20) + "vw" ));

		setTimeout(() => $particle.show(), 700);
		
	},
	clearRain()
	{
		$(this.$container).find(".particle").remove();
	}
}

function isSlideContainTrigger(slide)
{
	return ($(slide).find("#cool-trigger").length == 1);
}

Reveal.addEventListener( 'slidechanged', event => 
{
	const currentSlide = event.currentSlide;

	if(isSlideContainTrigger(currentSlide))
	{
		Particles.$container = currentSlide;
		Particles.init();

		let audio = new Audio('cool_assets/thug_life.mp3');
		audio.play();
	
		setTimeout(() =>
		{
			Particles.clearRain();
			setTimeout(() => audio.pause(), 1000);
			Reveal.next();	
		}, 25000);		
	}
});
