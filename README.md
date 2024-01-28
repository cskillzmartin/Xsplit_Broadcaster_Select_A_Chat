# Xsplit Broadcaster Select A Chat
An Xsplit Broadcaster extension that allows the user to show individual YouTube live chat messages from viewers as stream source content.
This project has ~15 unique clones per month.
If you are a user, please feel free to add feature requests as an issue https://github.com/cskillzmartin/Xsplit_Broadcaster_Select_A_Chat/issues. 
I will work on them as they come in. 


# Constraints  
This plugin is structured the way it is because 
1. I did not want the user to be required to install any software other than the extension itself.
2. Requests to the YouTube LiveChat API from the Xsplit Broadcaster client means dealing with CORS issues.

JS plugins that require out of band install were eliminated as a candidate. As I am not expecting users of this pulgin to have any knowledge of how it works or what it's doing, just enough knowledge about Xsplit Broadcaster to know how to install it. This extension, first and foremost, must be easy to use.

#Help
The plugin file to run is Xsplit_Broadcaster_Select_A_Chat/index.html
The source file to add to the scene is Xsplit_Broadcaster_Select_A_Chat/Xsplit_Broadcaster_Select_A_Chat_Source/index.html
