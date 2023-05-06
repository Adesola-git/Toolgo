# Toolgo
Wanted to use the abstarct factory class pattern but decided to use factory method pattern not to complicate the creation for now. 
I went with this pattern because currently we are creating a ceiling fan but there maybe a reason to create other type of fan in the future. if i was told to create a different type of fan at the start, depending on the feature, i might have gone with abstract factory.
Added a state field to capture the state of the fan. This might be used to develop other features like fan should do nothing if direction cord is pulled when fan is off.  