# Translate Position Explanation

To moves items around the screen you typically want to use translateX and translateY. These will not cause layout changes and will be the most performant want to execute an animation. There are trade offs to using translate. Since it doesn't effect layout, the surrounding layouts won't be effected.

For example if you wanted to move an item left or right and have another item fill in to it's spot, this won't happen. You would need to manually adjust the other elements in conjunction with the transform. In order to get this style of animation to work you'd have to animate layouts.

I'm pointing this out as we will cover animations that use translate and layout (width/height/absolute position). There are times where doing animations with layout values won't be performant enough to reach 60FPS, and you will need to find different ways to accomplish your animations using translates and other transforms.

Translations operate like a grid, where 0,0 is the top left of the element. The Y piece will operate on the Y axis, go up and down/move top to bottom. The X will operate on X axis, go left to right.

In order to move up and or left (depending on the axis) we need to move negatively. If we want to move down or right we need to move positively.

This animation here because we are moving in a positive direction, and passing it into translateY and translateX we will be moving towards the bottom right hand corner (diagonally).
