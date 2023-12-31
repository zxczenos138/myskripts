/// api_version=2
var script = registerScript({
    name: "SPEEEEEED",
    version: "3.1",
    author: "zxczenos138"
});

script.registerModule({
    name: "SPEEEEEED",
    description: "An example SPEEEEEED.",
    category: "Movement",
    settings: {
        timer: Setting.float({
            name: "Timer",
            min: 1.0,
            max: 3.1,
            default: 1.2
        }),
        motion: Setting.float({
            name: "Motion",
            min: 1.0,
            max: 1.05,
            default: 1.02 
        })
    }
}, function (module) {
    module.on("enable", function () {
	y = module.settings.timer.get();
        mc.timer.timerSpeed = y
	Chat.print("Demo Script loaded.");
    });

    module.on("disable", function () {
        mc.timer.timerSpeed = 1;
    });

    module.on("motion", function () {
        if (!mc.gameSettings.keyBindForward.isKeyDown())
            return;

        mc.thePlayer.setSprinting(true);

        if (mc.thePlayer.onGround)
            mc.thePlayer.jump();


        mc.thePlayer.motionX *= module.settings.motion.get();
        mc.thePlayer.motionZ *= module.settings.motion.get();
    });
});
