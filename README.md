## Simple Pop Up for Input HTML Tag
**What does it do?**
Well, exactly what it says on the tin. An easy way to add a notification like pop up when clicking on an input box. 

**Why?**
Sometimes user's might not know what to type into the field. Especially, if the field is expecting specific data, or there is no room for more information regarding the input area. 

**How do I use it?**
That's easy. Include the script inside the HTML header (or body). 
``<script src="inputpopup.js"> </script>``

Then, add an input field.
``<input>``
Inside the input tag, add an ``onclick`` and ``data-helpText`` attributes.
The ``data-helpText`` is where the text for the notification goes.

**Example**
``<input id="whateverIdYouWant" onclick="getInputHelp(this.id)" data-helpText="Your Text Here">``

**That's it! Done**