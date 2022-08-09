import { firestore } from './firestore';

export const getProducts = async () => {
	const collectionRef = firestore.collection('products');

	const data = await collectionRef.orderBy('category', 'desc').get();

	const rawDocuments = data.docs;

	const cleanedDocuments = rawDocuments.map((rawDoc) => ({
		...rawDoc.data(),
		id: rawDoc.id,
	}));

	console.log(cleanedDocuments);
	return cleanedDocuments;
};

export const getProductById = async (id) => {
	// https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference
	const collectionRef = firestore.collection('products');
	// get the document reference
	const docRef = collectionRef.doc(id);
	// wait for the querySnapshot
	const rawDoc = await docRef.get(); // QuerySnapshot<T>
	// return a properly formatted object
	return { id: rawDoc.id, ...rawDoc.data() };
};
