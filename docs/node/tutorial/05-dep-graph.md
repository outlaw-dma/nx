# Step 5: Dep Graph

## Video of this Lesson

<iframe width="560" height="600" src="https://www.youtube.com/embed/l9MjZ9IPdu4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

An Nx workspace can contain dozens or hundreds of applications and libraries. As a codebase grows, it can be difficult to understand how they depend on each other and the implications of making a particular change.

Previously, some senior architect would create an ad-hoc dependency diagram and upload it to a corporate wiki. The diagram is not correct even on Day 1 and gets more and more out of sync with every passing day.

With Nx, you can do better than that.

!!!!!
Run "nx dep-graph". What do you see?
!!!!!
A dependency diagram in the browser
A dep-graph.html file created at the root of the workspace
A json document printed out in the terminal
