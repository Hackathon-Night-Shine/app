import { Box, Stack, Typography } from "@mui/material";
import { RefObject } from "react";

interface Props {
  imageRef: RefObject<HTMLInputElement | null>;
  imageSrc: string | null;
  handleSourceUpdate: (source: string) => void;
}

const ImageUploader: React.FC<Props> = ({
  imageRef,
  imageSrc,
  handleSourceUpdate,
}) => {
  const handleOpenImageUpload = () => {
    imageRef.current?.click();
  };

  return (
    <div>
      <input
        ref={imageRef}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              handleSourceUpdate(reader.result as string);
            };
            reader.readAsDataURL(file);
          }
        }}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
      />
      {imageSrc ? (
        <Stack direction="column">
          <img
            src={imageSrc}
            height={240}
            width={350}
            style={{ borderRadius: 8 }}
            alt="Retreat"
            onClick={handleOpenImageUpload}
          />
          <Typography variant="caption" textAlign="center">
            לחץ לעריכת תמונה
          </Typography>
        </Stack>
      ) : (
        <Box
          height={240}
          width={350}
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{ border: 1, borderRadius: 1 }}
          onClick={handleOpenImageUpload}
        >
          <Typography variant="h6" textAlign="center">
            לחץ כאן להוספת תמונה
          </Typography>
        </Box>
      )}
    </div>
  );
};

export { ImageUploader };
