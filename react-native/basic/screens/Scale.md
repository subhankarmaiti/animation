# Scale Explanation

Scale is a way to animate the size of an element. It can be used to increase or decrease the size. What it's actually doing is defining how much to scale the coordinates. That means you can define the scale of x and y independently to have non-linear scaling. Scale defaults to 1 for both x and y. This just means scale to the size you have defined by your layout.

The scale will transform from the center of the element. That means if you scale X it will scale on the left/right sides evenly

Additionally when scale is negative a point reflection is created. What that means is it will flip over the opposite axis. So if we provide a -1 on scaleY, it will flip over the X axis.
