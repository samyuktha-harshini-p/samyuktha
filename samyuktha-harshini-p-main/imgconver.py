from pdf2image import convert_from_path

# Path to your PDF file
pdf_file = 'C:/Users/samyu/Documents/CYSE CERTI/Comptia Security+.pdf'

# Convert PDF to image
images = convert_from_path(pdf_file, 200)  # 200 is the resolution, you can adjust as needed

# Save the first page's image as thumbnail
images[0].save('comptia.jpg', 'JPEG')
