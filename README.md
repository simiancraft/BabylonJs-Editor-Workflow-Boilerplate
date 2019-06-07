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

## 1. Create Your First Scene

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
So far we've opened the editor. We've made a very tiny change  to the meshes by reassigning some materials and we want to save our work. Let's decide to call this scene `Rainy-Day`. I will now make a folder inside of the `editor-projects` folder called `Rainy-Day`. So far, this seems excessively nested, but the reasoning will be clear as you read.

![image](https://user-images.githubusercontent.com/954596/59080066-69a9d100-88ac-11e9-8a51-19b27efe75e7.png)

Now you need to go to the Project Menu and click `Save Project As...`
![image](https://user-images.githubusercontent.com/954596/59080083-87773600-88ac-11e9-90e3-3f9ceff85fc1.png)

Make sure you select your newly created `Rainy-Day` folder and proceed. You should now have a folder structure like this
```bash
📁editor-projects
    📁Rainy-Day
        📁scene
        |   | albedo.png
        |   |📄 amiga.jpg
        |   |📄 documentation.png
        |   |📄 environment.dds
        |   |📄 flake.bmp
        |   |📄 flare.png
        |   |📄 mahogfloor_ao.jpg
        |   |📄 mahogfloor_basecolor.png
        |   |📄 mahogfloor_normal.jpg
        |   |📄 rain.jpg
        |   |📄 reflectivity.png
        |   |📄 rustediron2_basecolor.png
        |   |📄 rustediron2_metallic.png
        |   |📄 rustediron2_normal.png
        |   |📄 rustediron2_roughness.png
        |   `📜 scene.babylon
        `📜 scene.editorproject

3 directories, 17 files
```
![image](https://user-images.githubusercontent.com/954596/59080127-d1f8b280-88ac-11e9-8dd5-920a92263117.png)

Inside of the `Rainy-Day` Directory there's the `scene` folder with the art and assets, and just above that is `scene.editorproject`.

Of special note are two files

1. 📜 `scene.babylon` - this is a JSON file that contains all the information about your scene, such as the meshes, cameras, lights and so on. This goes right alongside the assets, like the textures

2. 📜 `scene.editorproject` - this is also a JSON file, and it contains information used by the *editor*. For isntance, the list of the materials, the files list, globalConfigurations, and the current state of the tools, like what is open or closed, or what theme you have.

I encourage you to open them both in your favorite editor (VS Code) and take a look.

---

### 2. Iterate on that Scene.

Close the editor. 

Imagine you're another person working on the project. Or you're you later in the day after lunch. Time passes. We iterate.

Its time to reopen. Doubleclick the `scene.editorproject` file now! 

![image](https://user-images.githubusercontent.com/954596/59081066-d1aee600-88b1-11e9-9d5f-eaf6cd4ee4ea.png)

The editor will reopen the scene, as expected.

![image](https://user-images.githubusercontent.com/954596/59080330-c2c63480-88ad-11e9-90a5-0d17e27592f6.png)

Voila! Just like you've left it! 

Now we can make more small changes. I will 
1. remove the documentation plane.
2. move and scale some of the orbs

#### Remove Documentation Plane and The Graph Tab
One way you can select something is to select it in the preview pane. Another way to do it is in the `Graph` Tab as well. Select the Documentation and hit `Delete`. Boom, its gone.

![graph-optimized](https://user-images.githubusercontent.com/954596/59080871-b2638900-88b0-11e9-9a06-fc554037b05f.gif)

The graph tab seems less useful at this time with so few things, but it can be a really good way to find meshes with the search box and also to avoid any awkwardness with clicking around in the `Preview` Tab too. 

As your scene grows, so does the utility of this tab.

#### Manipulate Orbs with the `Preview` Controls

One way to maipulate the qualities, such as position, scale and rotation of assets in the scene is to select the item by clicking in it, or in the `Graph` Tab and then go to the corresponding property in the `Inspector` and just type in or sleect what you like. This is how we changed the Material on these spheres. There's another way to do it with the controls atop the preview. 

I don't think there's much to say here, except this is exactly how any other 3d program behavies, such as Unity or Blender. Go ahead and modify these meshes and also notice the values change in the `Inspector` Tab as you do.

![preview-controls-optimized](https://user-images.githubusercontent.com/954596/59081276-dcb64600-88b2-11e9-889e-2c6de7da65ef.gif)

#### Nice. Now Resave.

You can, in this case, just click `Save Project` or CTRL+ S. However, when we begin to export to the web project as well as work in these scenes it might be a good idea to always use the `Save Project As ...` Option, so that you always explicitly target the correct folder and never accidentally stomp over the wrong project accidentally.


Great. This is the core iterative loop for working on a single scene. WE took some time to look at some aspects of the editor in this part of the workflow tutorial because; thusfar, the workflow is very simple. It only consists of the one project.

1. double click your scene
2. make changes
3. save project as, in your folder.
4. repeat

Next we will add another scene, before we explore how the process will be modified in the context of a web application that relies on this editor.

### 3. Make a new scene.

Tom ake the pattern more clear, it makes sense to make a second scene.



