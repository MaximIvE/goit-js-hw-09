!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var i=u("iU1Pc"),r={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')},a={useIcon:!1};function l(e,n){return new Promise((function(t,o){var u=Math.random()>.3;setTimeout((function(){u?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.form.addEventListener("submit",(function(n){n.preventDefault();for(var t={delay:Number(r.inputDelay.value),step:Number(r.inputStep.value),amount:Number(r.inputAmount.value)},o=t.delay,u=t.step,c=t.amount,d=1;d<=c;d+=1)l(d,o).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),a)})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),a)})),o+=u}))}();
//# sourceMappingURL=03-promises.281f988e.js.map