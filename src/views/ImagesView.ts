import Image from "../models/Image";
import { Optional } from "../types";

export const ImagesView = {
    render: (image: Image): Optional<Image> => {
        return {
            id: image.id,
            path: 'http://localhost:3333/uploads/' + image.path,
        }
    },
    renderMany: (images: Image[]): Optional<Image>[] => {
        return images.map(image => ImagesView.render(image));
    }
}
