     function previewImage(event) {
                const imgElement = document.getElementById('userImage');
                imgElement.src = URL.createObjectURL(event.target.files[0]);
            }

            function openGallery() {
                alert("Open gallery to select an image.");
            }

            function changeButtonSize() {
                const gridContainer = document.getElementById('gridContainer');
                const selectedSize = document.getElementById('sizeOptions').value;

                gridContainer.classList.remove('small', 'medium', 'large');

                gridContainer.classList.add(selectedSize);
            }
            
          
            function goBack() {
                window.history.back();
            }
            
            
            function applyChanges() {
                const sizeOption = document.getElementById('sizeOptions').value;
                const columnOption = document.getElementById('columnOptions').value;

                const previewContainer = document.getElementById('previewContainer');
                
                previewContainer.classList.remove('small', 'medium', 'large');
                previewContainer.classList.add(sizeOption);

                previewContainer.style.gridTemplateColumns = `repeat(${columnOption}, 1fr)`;
            }

            function saveChanges() {
                const sizeOption = document.getElementById('sizeOptions').value;
                const columnOption = document.getElementById('columnOptions').value;

                localStorage.setItem('buttonSize', sizeOption);
                localStorage.setItem('gridColumns', columnOption);

                alert('Changes saved! Now navigate back to the main page to see the updates.');
            }

            window.onload = function() {
                const savedSize = localStorage.getItem('buttonSize');
                const savedColumns = localStorage.getItem('gridColumns');

                if (savedSize) {
                    document.getElementById('sizeOptions').value = savedSize;
                    document.getElementById('previewContainer').classList.add(savedSize);
                }
                if (savedColumns) {
                    document.getElementById('columnOptions').value = savedColumns;
                    document.getElementById('previewContainer').style.gridTemplateColumns = `repeat(${savedColumns}, 1fr)`;
                }
            };