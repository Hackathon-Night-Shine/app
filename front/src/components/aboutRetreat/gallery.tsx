
import { useState, useEffect, useRef } from "react";
import { Container, ProGallery } from "pro-gallery";
import "pro-gallery/dist/statics/main.css";

const FullHeightGallery = () => {
    const galleryRef = useRef(null);
    const [container, setContainer] = useState<Container>({ width: window.innerWidth, height: window.innerHeight });
    const [items, setItems] = useState<any>([]);

    // Dynamically get image aspect ratio
    const getImageAspectRatio = (src: string) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve(img.width / img.height);
        });
    };

    useEffect(() => {
        const updateContainerSize = () => {
            if (galleryRef.current) {
                setContainer({
                    width: galleryRef.current.clientWidth,
                    height: galleryRef.current.clientHeight,
                });
            }
        };

        window.addEventListener("resize", updateContainerSize);
        updateContainerSize();

        return () => window.removeEventListener("resize", updateContainerSize);
    }, []);

    useEffect(() => {
        // Define your image sources
        const imageSources = [
            "/images/ded4d3_5f548152104b4fe0b2ad2a578ef9f832~mv2.avif",
            "/images/ded4d3_716a3140d7774b1ebee398f983d6f78c~mv2.avif",
            "/images/ded4d3_28bccaaf77ed4641bf9d099f85ad6a3c~mv2.avif",
            "/images/ded4d3_f270a541f0744338ae9edf94377bf892~mv2.avif",
            "/images/ded4d3_f363babe43b847709de9d4036cea279c~mv2.avif",
            "/images/ded4d3_2e558787fb374ec0915dfc8f69bb8c0c~mv2.avif",
            "/images/ded4d3_ab9a260cd87048f284f08cbd9f7d6e5e~mv2.avif",
            "/images/ded4d3_a85a30700055448aa5429c38d3624af2~mv2.avif",
            "/images/ded4d3_c59a2d304da94130964833d8c21db290~mv2.avif",
            "/images/ded4d3_35eb53b566884f62b24263575d46b3e8~mv2.avif",
            "/images/ded4d3_3a76464d031049d7bce8c83bc1c0a746~mv2.avif",
            "/images/ded4d3_640bb118128449779b645ea529506812~mv2.avif",
            "/images/ded4d3_0f9ae8ecd098492eaf17a5584f3cf725~mv2.avif",
        ];

        // Generate image items with aspect ratio
        const loadImages = async () => {
            const loadedItems = await Promise.all(
                imageSources.map(async (src, index) => {
                    const aspectRatio = await getImageAspectRatio(src);
                    return {
                        itemId: String(index + 1),
                        mediaUrl: src,
                        metaData: { title: `Image ${index + 1}`, aspectRatio },
                    };
                })
            );
            setItems(loadedItems);
        };

        loadImages();
    }, []);

    // Gallery options: Masonry layout, fills height
    const options: any = {
        layoutParams: {
            structure: { galleryLayout: 2 }, // Masonry layout
            crop: { method: "FILL", ratio: 1 }, // Auto-fit
        },
        behaviourParams: {
            gallery: { scrollAnimation: "FADE_IN" },
        },
        stylingParams: {
            itemBorderRadius: 5,
        },
    };

    return (
        <div ref={galleryRef} style={{ width: "100vw", height: "100vh", display: "flex" }}>
            {items.length > 0 && <ProGallery items={items} options={options} container={container} />}
        </div>
    );
};

export default FullHeightGallery;
