# Babylon JS Editor Workflow Boilerplate
---

One of the most important things in working in the BabylonJs Editor system is a reliable and stable workflow. The purpose of this short guide is to jumpstart anyone with the BabylonJs editor, and adopt the recommended workflow. 



Over the course of the next steps we will be creating a project that can be run in the web where multiple scenes might exist. This is the sort of setup one might encounter if they are, for instance, making a video game with multiple levels or if they are working on a team where differnt folks might work on the art and the assets from the folks that are working on the code. However, even if you are responsible for every aspect of a project, or if your project doesn't have multiple scenes, this is still the ideal approach to structuring a project so that you can work comfortable with an editor.

In short here are our goals:

1. Create a scene, and demonstrate how to modify and save that scene.
2. Reopen that scene, make changes and resave.
3. Add another scene, and describe the process for managing more than one scene.
4. Use the editor to scaffold a web project and provision it to handle our scenes.
5. Be able to make changes to the scenes, and to the web project and maintain a proper sequence of events so that no work is lost and the workflow is comfortable.

## Create Your First Scene

After Installing the BabylonJsEditor on your particular platform, open the editor.
![image](https://user-images.githubusercontent.com/954596/59078070-05364400-88a3-11e9-82d4-f05da127312c.png)

#### Your First Clicks
You should see something like the image above. This is the editor in a default state. If at any point you're concerned your editor is not in a default state, a handy tool is the reset button in the `edit` menu. You can click this now, or anytime you need to reset the editor into a default, 'vanilla' state.

![image](https://user-images.githubusercontent.com/954596/59078164-7118ac80-88a3-11e9-9933-5efb71480333.png)

The first thing we will do before we go very far is click the button to use the `Dark Theme`, which is also in the `Edit` menu, just above the reset button.

![image](https://user-images.githubusercontent.com/954596/59078304-1d5a9300-88a4-11e9-95e9-7df9f241cc5c.png)

This is just an aesthetic decision, but aren't you glad you did that? Dark Themes are awesome.

#### Set Up Folders
Now we want to make some changes to this project, so we can be sure we're saving and loading the project correctly. Lets prepare our working directory. 

1. First make a folder in a place where you want to put your work. I made a folder called `my-babylonjs-workflow-demo`. This is where we will be saving our entire project. 
2. Inside of this folder, make another folder called `editor-projects`. This is where we are going to save the Babylonjs Editor Projects. This is the place the person or persons who work on the art and the scenes will be working interatively.

Your folder structure thusfar will look like this.
![image](https://user-images.githubusercontent.com/954596/59078492-ffd9f900-88a4-11e9-9bc3-2834b8ef1d23.png)

#### Small Change in the Mesh Inspector
Now lets make some trivial changes to the default project. I am going to assign new materials to each mesh in the scene for now. I can start this process by clicking the first sphere in the default project. When you do, you'll see a new menu open on the left. This is the `Inspector`. Now is a good time to briefly describe what this is. 

![image](https://user-images.githubusercontent.com/954596/59078641-a6be9500-88a5-11e9-830b-6abb9498f5ba.png)

Here you can see, in the properties tab all the general properties of this mesh, such as its assigned material, Position, Rotation, Scaling and so on. The other tabs, expectedly control other aspects of this mesh. In the `Physics` you can configure things, such as collisions and in this case, the third tab says `StandardMaterial`, but in any case this is the place where you can have a way to edit the underlying material that is on this mesh. Be aware this affects this material everywhere, and not jsut for this specific mesh. It is here for convenience, it is no differnt than going into the `Materials Viewer` and selecting a material there, which will be discussed later.

So for now, just click each sphere, and change the material to something. You cna play with the other properties as well if you want to experiment. Here is my scene after doing this:

![image](https://user-images.githubusercontent.com/954596/59078888-c2766b00-88a6-11e9-813a-adc6a01c9ded.png)

I just changed the spheres to `Ground`. So they all look the same. 

#### Checking Your Work
Lets say I wanted to do a quick test of this scene before I decide to save. No problem. Just click the `Play` Button at the top.

![image](https://user-images.githubusercontent.com/954596/59078933-fe113500-88a6-11e9-8853-8ada29c50d9d.png)

When you do, you'll see a window appear that plays the current scene. This is the `Game` Tab

![image](https://user-images.githubusercontent.com/954596/59079912-96111d80-88ab-11e9-92c9-7d11897e7f06.png)

You can see your scene now without the labels, and some basic information in a window, such as the current FPS and the size of the game window. You can use `WASD` and your mouse to fly around with the camera. This is how we think the scene will look.

#### SideQuest: Make a Movie
You can even click record, and record a short scene with the camera, by clicking the record button that appeared.

![smallest-gif](https://user-images.githubusercontent.com/954596/59079773-e176fc00-88aa-11e9-98f9-f8822c662279.gif)

You can save this short video, just click `Save Record` and you will get a nice-quality .webm video

![image](https://user-images.githubusercontent.com/954596/59079567-f901b500-88a9-11e9-8958-e30eb3b8bd0e.png)

[You can see the output of this little example here](https://i.imgur.com/V0H8SpK.mp4) (Hosted on Imgur)

#### Save It!