//@ts-ignore
//@ts-nocheck
import { Alert } from "react-native";

export  const displaySuccessMessage = (msg: string) => asyncAlert("",msg);
export  const displayInfoMessage = (msg: string) => asyncAlert("",msg);
export  const displayWarningMessage = (msg: string) => asyncAlert("",msg);
export  const displayErrorMessage = (msg: string) => asyncAlert("",msg);

const asyncAlert = (title:string, msg:string) => {
  return new Promise((resolve, reject) => {
    Alert.alert(
      title,
      msg,
        [
            {text: 'ok', onPress: () => resolve('YES') },
        ],
        { cancelable: false }
    )
})
}

export const displayConfirmAlert = (title: string, description: string, onAccept: Function, acceptButtonLabel?: string, declineButtonLabel?: string ) => {
	return Alert.alert(
		title,
		description,
		[
			{
				text: acceptButtonLabel ??"Yes",
				onPress: () => {
					onAccept();
				},
			},
			{
				text: declineButtonLabel ?? "No",
			},
		]
	);
};

