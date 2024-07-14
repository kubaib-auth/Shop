//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;
//using Abp;
//using Abp.Extensions;
//using Abp.Notifications;
//using Abp.Timing;
//using Abp.Web.Security.AntiForgery;
//using System.IO;
//using System.Linq;
//using Abp.IO.Extensions;
//using Abp.UI;
//using Abp.Web.Models;
//using LessWebStore.Controllers;
//using Microsoft.AspNetCore.Authorization;
//using LessWebStore.Storage;
//using System;

//namespace LessWebStore.Web.Host.Controllers
//{
//    [Authorize]
//    public class DocumentsController : LessWebStoreControllerBase
//    {
//        private readonly ITempFileCacheManager _tempFileCacheManager;

//        private const long MaxDocumentFileLength = 5242880; //5MB
//        private const string MaxDocumentFileLengthUserFriendlyValue = "5MB"; //5MB
//        private readonly string[] DocumentFileAllowedFileTypes = { "jpeg", "jpg", "png", "doc", "xls", "docx", "zip", "ZIP", "text", "heic", "gif", "webp", "bmp", "tiff", "heif", "svg", "pdf", "html", "xml", "JPG", "xlxs", "PPT", "PPTX", "TXT", "HEIC", "ppt", "pptx", "DOC", "DOCX", "JPEG", "SVG", "GIF", "PDF", "PNG", "xlsx" };

//        public DocumentsController(ITempFileCacheManager tempFileCacheManager)
//        {
//            _tempFileCacheManager = tempFileCacheManager;
//        }

//        public FileUploadCacheOutput UploadDocumentFileFile()
//        {
//            try
//            {
//                //Check input
//                if (Request.Form.Files.Count == 0)
//                {
//                    throw new UserFriendlyException(L("NoFileFoundError"));
//                }

//                var file = Request.Form.Files.First();
//                if (file.Length > MaxDocumentFileLength)
//                {
//                    throw new UserFriendlyException(L("Warn_File_SizeLimit", MaxDocumentFileLengthUserFriendlyValue));
//                }

//                var fileType = Path.GetExtension(file.FileName).Substring(1);
//                if (DocumentFileAllowedFileTypes != null && DocumentFileAllowedFileTypes.Length > 0 && !DocumentFileAllowedFileTypes.Contains(fileType))
//                {
//                    throw new UserFriendlyException(L("FileNotInAllowedFileTypes", DocumentFileAllowedFileTypes));
//                }

//                byte[] fileBytes;
//                using (var stream = file.OpenReadStream())
//                {
//                    fileBytes = stream.GetAllBytes();
//                }

//                var fileToken = Guid.NewGuid().ToString("N");
//                _tempFileCacheManager.SetFile(fileToken, new TempFileInfo(file.FileName, fileType, fileBytes));

//                return new FileUploadCacheOutput(fileToken);
//            }
//            catch (UserFriendlyException ex)
//            {
//                return new FileUploadCacheOutput(new ErrorInfo(ex.Message));
//            }
//        }

//        public string[] GetDocumentFileFileAllowedTypes()
//        {
//            return DocumentFileAllowedFileTypes;
//        }

//    }
//}
