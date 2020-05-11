var wh = window.innerHeight,
	$innerS1 = $('.innerS1'),
	$innerS2 = $('.innerS2'),
	$innerS3 = $('.innerS3'),
	$innerS4 = $('.innerS4');

	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

	// Create scene
	$("section").each(function() {
	  
		new ScrollMagic.Scene({
			triggerElement: this,
			duration: '1000'
		})
		.setPin(this)
		.addTo(ctrl);
	 
	});

	
	// Animate the hat up, letter A in and fade in content of section 2
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat		
	.to($innerS1, 0.3, {yPercent: -50, autoAlpha: 0, ease: Power4.easeInOut})
	.fromTo($innerS2, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0');

  new ScrollMagic.Scene({
    offset: wh*0.5,//inner s1 disappear
    triggerElement: $('.innerS1 h1')[0],
    duration: '500%'
  })
  .setTween(iphoneContentHat)
//   .addIndicators()
  .addTo(ctrl);

	// Animate letter A out, letter B in and fade in content of section 3
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl		
	.to($innerS2, 0.3, {yPercent: -50, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($innerS3, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0');

  new ScrollMagic.Scene({
	offset: wh*0.5,
    triggerElement: $('.innerS2 h1')[0],
    duration: '500%'
  })
  .setTween(iphoneContent1Tl)
  .addTo(ctrl);

	// Animate letter B out, letter C in and fade in content of section 4
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl		
  .to($innerS3, 0.3, {yPercent: -50, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($innerS4, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0');

  new ScrollMagic.Scene({
	offset: wh*0.5,
    triggerElement: $('.innerS3 h1')[0],
    duration: '500%'
  })
  .setTween(iphoneContent2Tl)
  .addTo(ctrl);