import Image from "next/image";

export default function Profile() {
    return (
        <div className="flex-space-x-4">
                  <Image
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
        width={100}
        height={100}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "13px"
        }}
        
      />
        </div>

    );
  }